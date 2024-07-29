
const getDate = () => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  const date = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
  return date;
};

export default getDate;