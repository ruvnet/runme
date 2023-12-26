package main

import (
	"fmt"
	"os"
	"runtime"
	"runtime/pprof"

	"github.com/stateful/runme/internal/cmd"
	"github.com/stateful/runme/internal/version"
)

func main() {
	os.Exit(root())
}

func root() (status int) {
	root := cmd.Root()
	root.Version = fmt.Sprintf("%s (%s) on %s", version.BuildVersion, version.Commit, version.BuildDate)

	rootWithCPUProfile(func() {
		if err := root.Execute(); err != nil {
			logf("could not execute command: %v", err)
			status = 1
		}
	})

	return
}

func rootWithCPUProfile(fn func()) {
	if profile := os.Getenv("RUNME_PROFILE_CPU"); profile != "" {
		f, err := os.Create(profile)
		if err != nil {
			fatalf("could not create CPU profile: %v", err)
		}
		defer f.Close()

		if err := pprof.StartCPUProfile(f); err != nil {
			fatalf("could not start CPU profile: %v", err)
		}
		defer pprof.StopCPUProfile()
	}

	fn()

	if profile := os.Getenv("RUNME_PROFILE_MEM"); profile != "" {
		f, err := os.Create(profile)
		if err != nil {
			fatalf("could not create mem profile: %v", err)
		}
		defer f.Close()

		runtime.GC()

		if err := pprof.WriteHeapProfile(f); err != nil {
			fatalf("could not write heap profile: %v", err)
		}
	}
}

func fatalf(format string, args ...interface{}) {
	logf(format, args...)
	os.Exit(1)
}

func logf(format string, args ...interface{}) {
	_, _ = fmt.Fprintf(os.Stderr, format, args...)
}
