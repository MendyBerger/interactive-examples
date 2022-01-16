(module

  (func (export "add") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; add both numbers and return the result
    i32.add
  )

)
