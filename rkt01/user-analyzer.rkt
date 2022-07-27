#lang racket

(provide make-user
         user-id
         user-name
         make-user-analyzer)

(define (make-user id name)
  (list id name))

(define (user-id u)
  (car u))

(define (user-name u)
  (cadr u))

(define (dict-ref-or-else d key default)
  (if (dict-has-key? d key)
      (dict-ref d key)
      default))

(define (make-user-analyzer users friendship-pairs)
  (define (make-friendships pairs)
    (if (null? pairs)
        #hash()
        (let* ((d (make-friendships (cdr pairs)))
               (pair (car pairs))
               (i (car pair))
               (j (cdr pair))
               (fi (dict-ref-or-else d i '()))
               (fj (dict-ref-or-else d j '())))
          (dict-set (dict-set d
                              i
                              (cons j fi))
                    j
                    (cons i fj)))))

  (define friendships
    (make-friendships friendship-pairs))

  (define (number-of-friends user)
    (length
     (dict-ref friendships (user-id user))))

  (define (dispatch m . args)
    (cond ((eq? m 'number-of-friends)
           (number-of-friends (car args)))
          (else
           'method-not-found)))

  dispatch)
