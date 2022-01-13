(module

  (func (export "subtract") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; subtract on number from the and return the result
    i32.sub
  )

)
