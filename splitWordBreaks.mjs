// @ts-check

/**
 * Splits a string at aesthetically pleasing word break opportunities.
 * @param {string} string String to split.
 * @param {string} [placeholder] A temporary placeholder that hopefully doesn’t
 *   occur in the input string. Defaults to `"<wbr />"`.
 * @returns {Array<string>} The split string.
 */
export default function splitWordBreaks(string, placeholder = "<wbr />") {
  // Ideally this whole process could be done in one step with split and a
  // regexp using lookbehind, but that has poor cross browser support.
  return (
    string
      // Mark aesthetically pleasing word break opportunities, e.g.
      // `learnHTML5WithUs` → `learn<wbr />HTML<wbr />5<wbr />With<wbr />Us`.
      .replace(/(\d+|[A-Z]+(?![a-z])|[A-Z][a-z])/gu, `${placeholder}$1`)

      // Remove word break opportunities at redundant locations: At the start of
      // a line, or after whitespace.
      .replace(new RegExp(`(^|\\s)(${placeholder})`, "gmu"), "$1")

      // Split the string at the final word break opportunities.
      .split(placeholder)
  );
}
