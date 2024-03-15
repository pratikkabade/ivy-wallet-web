export function androidColorToHex(androidColor: any) {
    // Ensure the input is treated as an unsigned 32-bit integer
    let color = androidColor >>> 0;

    // Extract ARGB components
    let alpha = (color >> 24) & 0xFF;
    let red = (color >> 16) & 0xFF;
    let green = (color >> 8) & 0xFF;
    let blue = color & 0xFF;

    // Convert to hex string and pad with zeros if necessary
    let hexColor = "#" +
        alpha.toString(16).padStart(2, '0') +
        red.toString(16).padStart(2, '0') +
        green.toString(16).padStart(2, '0') +
        blue.toString(16).padStart(2, '0');

    return hexColor.toUpperCase(); // Return the hex color code
}