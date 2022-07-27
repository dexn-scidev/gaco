#lang racket

(require "user-analyzer.rkt")

(define users
  (list (make-user 0 "Hero")
        (make-user 1 "Dunn")
        (make-user 2 "Sue")
        (make-user 3 "Chi")
        (make-user 4 "Thor")
        (make-user 5 "Clive")
        (make-user 6 "Hicks")
        (make-user 7 "Devin")
        (make-user 8 "Kate")
        (make-user 9 "Klein")))

(define friendship-pairs
  (list '(0 . 1)
        '(0 . 2)
        '(1 . 2)
        '(1 . 3)
        '(2 . 3)
        '(3 . 4)
        '(4 . 5)
        '(5 . 6)
        '(5 . 7)
        '(6 . 8)
        '(7 . 8)
        '(8 . 9)))

(define A
  (make-user-analyzer users friendship-pairs))

(displayln (A 'number-of-friends (car users)))
