export function generateUsername(base: string = "newuser"): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generează un număr între 1000-9999
    return `${base}${randomNumber}`;
}
