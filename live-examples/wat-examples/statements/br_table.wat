(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    ;; label each block for easy reference
    (block $outer_block
      (block $middle_block
        (block $inner_block

          ;; choose which block to break out of based on their order in the br_table (zero-indexed)
          ;; 0 is `$inner_block`, 1 is `$outer_block`, 2 is `$middle_block`
          i32.const 0

          ;; create a br_table with three targets
          (br_table $inner_block $outer_block $middle_block)

          ;; we'll never reach this point since we broke out of the block
          unreachable

        )

        ;; if you jump out of the `$inner_block` block but stay in `$middle_block`, 42 will be logged.
        ;; if also jump out of the `$middle_block` block, either by jumping out of `$middle_block` or `$outer_block`, this will be skipped.
        i32.const 42
        call $log

      )
    )
  )

  (start 1) ;; run the first function automatically
)
