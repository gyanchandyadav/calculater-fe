declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite';

    interface EslintOptions {
        eslintPath?: string;
        lintOnStart?: boolean;
        include?: string[];
        exclude?: string[];
        formatter?: string | ((results: any) => string);
        emitWarning?: boolean;
        emitError?: boolean;
        failOnWarning?: boolean;
        failOnError?: boolean;
        errorOnUnmatchedPattern?: boolean;
    }

    export default function eslint(options?: EslintOptions): Plugin;
}
