// detectar si el cliente soporta colores
export const detectColorSupport = (userAgent) => {
  return !(
    userAgent.includes('Windows NT') &&
    (userAgent.includes('cmd.exe') || userAgent.includes('Command Prompt'))
  )
}

export const colors = {
  reset: '\u001b[0m',
  bold: '\u001b[1m',
  underline: '\u001b[4m',
  cyan: '\u001b[36m',
  blue: '\u001b[34m',
  brightBlue: '\u001b[94m',
  green: '\u001b[32m',
  brightGreen: '\u001b[92m',
  yellow: '\u001b[33m',
  brightYellow: '\u001b[93m',
  magenta: '\u001b[35m',
  gray: '\u001b[90m',
  white: '\u001b[97m',
  bgBlack: '\u001b[40m',
}
