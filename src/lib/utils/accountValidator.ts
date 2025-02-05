export function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?\d{8,17}$/
  return phoneRegex.test(phone)
}

export function validatePassword(password: string) {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~-]).{8,}$/

  return passwordRegex.test(password)
}

export function validateConfirmPassword(
  password: string,
  confirmPassword: string,
): boolean {
  return password === confirmPassword
}
