(module

  (func (export "remainder") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; calculate the remainder and return the result
    i32.rem_u
  )

)
