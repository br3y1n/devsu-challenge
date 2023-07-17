import { format, isValid, parse, addYears as oldAddYears } from "date-fns";

const FORMAT = "dd/MM/yyyy";
const OUTPUT_FORMAT = "yyyy-MM-dd";

const formatDate = (date: string) => format(new Date(date), FORMAT);

const isValidDate = (date: string) => {
  const parsedDate = parse(date, FORMAT, new Date());

  return isValid(parsedDate);
};

const addYears = (date: string) => {
  const parsedDate = parse(date, FORMAT, new Date());

  try {
    return format(oldAddYears(parsedDate, 1), FORMAT);
  } catch (error) {
    return date;
  }
};

const reformatDate = (date: string) => {
  const parsedDate = parse(date, FORMAT, new Date());

  return format(parsedDate, OUTPUT_FORMAT);
};
export { formatDate, isValidDate, addYears, reformatDate };
