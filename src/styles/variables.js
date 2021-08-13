import { css } from "styled-components";
import "@fontsource/inter";

const variables = css`
  :root {
    /* colors */
    --primary-500: #0a192f;
    --secondary-500: #ccd6f6;
    --secondary-400: rgba(204, 214, 246, 0.6);
    --secondary-300: rgba(204, 214, 246, 0.3);
    --tertiary-500: #64ffda;
    --tertiary-300: rgba(100, 255, 218, 0.1);

    /* typography */
    --heading-1: 3rem;
    --heading-2: 2.125rem;
    --heading-3: 1.5rem;
    --heading-4: 1.25rem;
    --heading-5: 1rem;

    --body-1: 1.25rem;
    --body-2: 1rem;
    --body-3: 0.875rem;

    --ff-primary: "Inter", sans-serif;
  }
`;
export default variables;
