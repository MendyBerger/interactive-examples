(module
  ;; import the browser console object, you'll need to pass this in from JavaScript
  (import "console" "log" (func $log (param i32)))

  (func
    (block $my_block

      ;; break out fo the block.
      ;; if this is removed the code will throw an error when it reaches `unreachable`
      br $my_block

      ;; we'll never reach this point since we broke out of the block
      unreachable

    )
  )

  (start 1) ;; run the first function automatically
)
