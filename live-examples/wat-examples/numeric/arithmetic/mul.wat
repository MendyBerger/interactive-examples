(module

  (func (export "multiply") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; multiply one number by the other and return the result
    i32.mul
  )

)
