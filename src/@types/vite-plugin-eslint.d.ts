declare module 'vite-plugin-eslint' {
    import { Plugin } from 'vite';

    interface ViteEslintOptions {
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

    function eslint(options?: ViteEslintOptions): Plugin;

    export default eslint;
}
