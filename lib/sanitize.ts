const MAX_TOOLS = 20;
const MAX_TOOL_LENGTH = 50;
const ALLOWED_PATTERN = /^[a-zA-Z0-9\s\-_.]+$/;

// Words that suggest prompt injection attempts
const INJECTION_PATTERNS = [
  /ignore/i,
  /instructions/i,
  /system/i,
  /prompt/i,
  /jailbreak/i,
  /override/i,
  /forget/i,
  /pretend/i,
  /roleplay/i,
  /simulate/i,
  /act as/i,
  /you are now/i,
];

export function sanitizeTools(tools: unknown): string[] {
  // Must be an array
  if (!Array.isArray(tools)) {
    throw new Error('tools must be an array');
  }

  // Must not be empty
  if (tools.length === 0) {
    throw new Error('tools array cannot be empty');
  }

  // Max 20 tools
  if (tools.length > MAX_TOOLS) {
    throw new Error(`Maximum ${MAX_TOOLS} tools allowed`);
  }

  const sanitized: string[] = [];

  for (const tool of tools) {
    // Must be a string
    if (typeof tool !== 'string') {
      throw new Error('Each tool must be a string');
    }

    const trimmed = tool.trim();

    // Must not be empty
    if (trimmed.length === 0) {
      continue;
    }

    // Max length
    if (trimmed.length > MAX_TOOL_LENGTH) {
      throw new Error(`Tool name exceeds maximum length of ${MAX_TOOL_LENGTH} characters`);
    }

    // Must match allowed characters
    if (!ALLOWED_PATTERN.test(trimmed)) {
      throw new Error(`Tool name contains invalid characters: ${trimmed}`);
    }

    // Check for injection patterns
    for (const pattern of INJECTION_PATTERNS) {
      if (pattern.test(trimmed)) {
        throw new Error(`Invalid tool name: ${trimmed}`);
      }
    }

    sanitized.push(trimmed);
  }

  if (sanitized.length === 0) {
    throw new Error('No valid tools provided');
  }

  return sanitized;
}