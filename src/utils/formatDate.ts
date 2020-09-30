const formatDate = (date: Date): string =>
  new Intl.DateTimeFormat('pt-br').format(new Date(date));

export default formatDate;
