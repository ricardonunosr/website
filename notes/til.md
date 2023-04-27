# Today I Learned (TIL) Notes


GCC: print all predefined macros:

```bash
gcc -dM -E - < /dev/null
```

Clang: Analyse build times

```bash
CC='clang -ftime-trace'
CXX='clang++ -ftime-trace'
ClangBuildAnalyzer --all <artifacts_folder> <capture_file>
```