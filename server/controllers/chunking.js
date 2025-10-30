export function slideWindowChunking(text) {
  const maxSize = 300, overlap = 50;
  const chunks = [];
  let start = 0;
  const length = text.length;

  while (start < length) {
    let end = start + maxSize;

    // If not the end of the text, move `end` backward to nearest punctuation
    if (end < length) {
      const nextStop = text.lastIndexOf('.', end);
      const nextQ = text.lastIndexOf('?', end);
      const nextE = text.lastIndexOf('!', end);
      const cut = Math.max(nextStop, nextQ, nextE);

      if (cut > start + maxSize * 0.5) end = cut + 1; 
    }

    const chunk = text.slice(start, end).trim();
    chunks.push(chunk);

    
    start = end ;
  }

  return chunks;
}