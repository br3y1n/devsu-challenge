"use client";
import { IProduct } from "@/interfaces/product.interfaces";
import { updateProducts } from "@adapters/api";
import Button from "@components/Button/Button";
import TextField from "@components/TextField/TextField";
import { RouteEnum, VariantEnum } from "@enums";
import { addYears, isValidDate } from "@utils/date/date";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { css, styled } from "styled-components";
import { HeaderStyled } from "../../page.styles";

// TODO refactor
const ContainerAddForm = styled.main`
  width: calc(100% - 60px);
  padding: 30px;
  display: flex;
  justify-content: center;
`;

const Other = styled.div`
  ${({ theme }) => css`
    max-width: 700px;
    width: 100%;
    border-radius: ${theme.borderRadius};
    background-color: ${theme.color.white};
  `}
`;

const H1 = styled.h1`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.fontFamily};
    padding: 10px 20px 30px 20px;
    border-bottom: 1px solid ${theme.color.gray};
  `}
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 0px 40px 30px 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 40px 0px 50px 0px;
`;

const EditPage = ({ params: { id } }: { params: { id: string } }) => {
  const {
    control,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      id: id!,
      logo: "",
      description: "",
      dateRelease: "",
      dateRevision: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dateReleaseWatcher = watch("dateRelease");

  const resetAllFields = () => {
    reset({
      name: "",
      id: id!,
      logo: "",
      description: "",
      dateRelease: "",
      dateRevision: "",
    });
  };

  const onSubmit = async (data: IProduct) => {
    try {
      setLoading(true);
      await updateProducts(data);

      router.push(RouteEnum.MAIN);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    setValue(
      "dateRevision",
      dateReleaseWatcher?.length === 10
        ? addYears(dateReleaseWatcher)
        : dateReleaseWatcher,
    );
  }, [dateReleaseWatcher]);

  const disabledSend = !isValid || loading;

  return (
    <>
      <HeaderStyled>
        <Image
          src="/images/banco-pichincha.webp"
          alt="banco pichincha"
          width={200}
          height={49}
          priority
        />
      </HeaderStyled>

      <ContainerAddForm>
        <Other>
          <H1>Formulario de edición</H1>

          <Form>
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <TextField
                  id="id"
                  label="ID"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors["id"]}
                  helperText={errors["id"]?.message as string}
                  disabled
                />
              )}
            />
            <Controller
              name="name"
              control={control}
              rules={{
                required: "Este campo es requerido!",
                minLength: { value: 5, message: "minimo 5 caracteres" },
                maxLength: { value: 100, message: "maximo 100 caracteres" },
              }}
              render={({ field }) => (
                <TextField
                  id="name"
                  label="Nombre"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors["name"]}
                  helperText={errors["name"]?.message as string}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              rules={{
                required: "Este campo es requerido!",
                minLength: { value: 10, message: "minimo 10 caracteres" },
                maxLength: { value: 200, message: "maximo 200 caracteres" },
              }}
              render={({ field }) => (
                <TextField
                  id="description"
                  label="Descripcion"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors["description"]}
                  helperText={errors["description"]?.message as string}
                />
              )}
            />
            <Controller
              name="logo"
              control={control}
              rules={{
                required: "Este campo es requerido!",
              }}
              render={({ field }) => (
                <TextField
                  id="logo"
                  label="Logo"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  error={!!errors["logo"]}
                  helperText={errors["logo"]?.message as string}
                />
              )}
            />

            <Controller
              name="dateRelease"
              control={control}
              rules={{
                required: "Este campo es requerido!",
                minLength: { value: 10, message: "Fecha invalida" },
                validate: {
                  matchPattern: (value) =>
                    isValidDate(value) || "Fecha invalida",
                },
              }}
              render={({ field }) => (
                <InputMask
                  value={field.value}
                  mask={"99/99/9999"}
                  maskChar={""}
                  onChange={field.onChange}
                >
                  {
                    //@ts-ignore
                    (input) => (
                      <TextField
                        id="dateRelease"
                        label="Fecha Liberación"
                        fullWidth
                        {...input}
                        error={!!errors["dateRelease"]}
                        helperText={errors["dateRelease"]?.message as string}
                      />
                    )
                  }
                </InputMask>
              )}
            />

            <Controller
              name="dateRevision"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  id="dateRevision"
                  label="Fecha Revision"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  disabled
                />
              )}
            />
          </Form>

          <ButtonsContainer>
            <Button variant={VariantEnum.SECONDARY} onClick={resetAllFields}>
              Reiniciar
            </Button>

            <Button
              variant={VariantEnum.PRIMARY}
              disabled={disabledSend}
              onClick={handleSubmit(onSubmit)}
            >
              Enviar
            </Button>
          </ButtonsContainer>
        </Other>
      </ContainerAddForm>
    </>
  );
};

export default EditPage;
