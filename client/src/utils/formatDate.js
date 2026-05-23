const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  );
};

export default formatDate;