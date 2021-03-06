Usage: Utility for Closure Library dependency calculation.

ClosureBuilder scans source files to build dependency info.  From the
dependencies, the script can produce a manifest in dependency order,
a concatenated script, or compiled output from the Closure Compiler.

Paths to files can be expressed as individual arguments to the tool (intended
for use with find and xargs).  As a convenience, --root can be used to specify
all JS files below a directory.

usage: closurebuilder.py [options] [file1.js file2.js ...]


Options:
  -h, --help            show this help message and exit
  -i INPUTS, --input=INPUTS
                        One or more input files to calculate dependencies for.
                        The namespaces in this file will be combined with
                        those given with the -n flag to form the set of
                        namespaces to find dependencies for.
  -n NAMESPACES, --namespace=NAMESPACES
                        One or more namespaces to calculate dependencies for.
                        These namespaces will be combined with those given
                        with the -i flag to form the set of namespaces to find
                        dependencies for.  A Closure namespace is a dot-
                        delimited path expression declared with a call to
                        goog.provide() (e.g. "goog.array" or "foo.bar").
  --root=ROOTS          The paths that should be traversed to build the
                        dependencies.
  -o OUTPUT_MODE, --output_mode=OUTPUT_MODE
                        The type of output to generate from this script.
                        Options are "list" for a list of filenames, "script"
                        for a single script containing the contents of all the
                        files, or "compiled" to produce compiled output with
                        the Closure Compiler.  Default is "list".
  -c COMPILER_JAR, --compiler_jar=COMPILER_JAR
                        The location of the Closure compiler .jar file.
  -f COMPILER_FLAGS, --compiler_flags=COMPILER_FLAGS
                        Additional flags to pass to the Closure compiler. To
                        pass multiple flags, --compiler_flags has to be
                        specified multiple times.
  --output_file=OUTPUT_FILE
                        If specified, write output to this path instead of
                        writing to standard output.

C:\Users\aaren.cordova\Documents\SVN\un_squadron\trunk\js\closure-library\closur
e\bin\build>
