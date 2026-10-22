/**
 * Utilities for Vector Space Dynamics calculations, validations, and animations
 */

export interface DemoFormValues {
  workEmail: string;
  name?: string;
  companyName?: string;
  teamSize?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates a work email address and demo request fields
 */
export function validateDemoForm(values: DemoFormValues): ValidationResult {
  const errors: Record<string, string> = {};

  if (!values.workEmail || values.workEmail.trim() === '') {
    errors.workEmail = 'Work email is required';
  } else {
    // Basic RFC email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.workEmail.trim())) {
      errors.workEmail = 'Please enter a valid work email address';
    } else {
      // Free email provider soft check
      const commonFree = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com'];
      const domain = values.workEmail.split('@')[1]?.toLowerCase();
      if (domain && commonFree.includes(domain)) {
        // Warning or allowed but marked
      }
    }
  }

  if (values.name !== undefined && values.name.trim() === '') {
    errors.name = 'Full name is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Easing interpolation for animated counters
 */
export function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

/**
 * Calculate counter progress value between start and end
 */
export function calculateCounterValue(start: number, end: number, progress: number): number {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  const eased = easeOutExpo(clampedProgress);
  return Math.round(start + (end - start) * eased);
}

/**
 * Format spending stats with prefix/suffix
 */
export function formatStat(value: number, suffix: string, prefix = ''): string {
  return `${prefix}${value}${suffix}`;
}

/**
 * Card 3D tilt calculation based on cursor relative coordinates (-1 to 1)
 */
export function calculateCardTilt(normX: number, normY: number, maxAngle = 15) {
  const clampedX = Math.min(Math.max(normX, -1), 1);
  const clampedY = Math.min(Math.max(normY, -1), 1);
  return {
    rotateY: clampedX * maxAngle,
    rotateX: -clampedY * maxAngle,
  };
}
