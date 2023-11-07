export function generateString(length) {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    return [...Array(length)]
      .map(i => characters[Math.random() * charactersLength | 0])
      .join('');
  }
  