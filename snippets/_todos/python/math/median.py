def median(list):
  list.sort()
  list_length = len(list)
  if list_length % 2 == 0:
    return (list[int(list_length / 2) - 1] + list[int(list_length / 2)]) / 2
  return float(list[int(list_length / 2)])

median([1, 2, 3]) # 2.0
median([1, 2, 3, 4]) # 2.5
