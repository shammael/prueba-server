const getRetyText = (text: string) => {
  const regex = /retry in (\d+) seconds/i;
  const retryTimeMatch = text.match(regex);
  return retryTimeMatch ? parseInt(retryTimeMatch[1], 10) : null;
};

export default getRetyText;
