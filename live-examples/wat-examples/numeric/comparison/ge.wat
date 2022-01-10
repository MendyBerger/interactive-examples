(module
  ;; create that checks if a number is equal to `2`
  (func (export "greater_or_equal_2") (param $num i32) (result i32)
    ;; load $num and 2 on to the stack
    local.get $num
    i32.const 2

    ;; check if $num is greater than or equal '2'
    i32.ge_u
  )
)
