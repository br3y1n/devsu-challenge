const TextField = ({ label, id }: { label?: string; id: string }) => {
  const withLabel = label !== undefined;
  const error = "error";

  return (
    <div>
      {withLabel && <label htmlFor={id}>{label}</label>}

      <input name={id} id={id} />

      {<span>{error}</span>}
    </div>
  );
};

export default TextField;
