const random = (min = 150, max = 190) => Math.floor(min + Math.random() * (max - min));

export function overviewEditor(text) {
    const newText = text.slice(0, random())
    const lastDot = newText.lastIndexOf(".");
    return newText.slice(0, lastDot) + "...."
}
