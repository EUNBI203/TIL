let numbers = [10, 1, 3, 5]
numbers[0] // 10
numbers[-1] // undefined
numbers.length // 4
numbers.reverse() // return + 원본 변경
numbers.push(100) // 5 [10, 1, 3, 5, 100] 마지막 원소에 추가 + return (길이)
numbers.pop() // 100 마지막 원소 제거 + return (원소)
numbers.unshift(4) // [4, 10, 1, 3, 5] 가장 첫번째 원소에 추가 + return (길이)
numbers.shift() // 4 가장 첫번째 원소 제거 + return (원소) 
numbers.includes(1) // true 포함여부 확인 
numbers.indexOf(1) // 1 가장 먼저 만난 값의 인덱스 반환
numbers.join() // 기본이 ,
numbers.join('-') // -로 연결