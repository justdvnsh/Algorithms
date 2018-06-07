def mean(x):
   return sum(x)/len(x)

def de_mean(x):
    ## step 1 - find out the mean
    x_bar = mean(x)

    ## step 2 - subtract mean from each element of the dataset
    return [x_i - x_bar for x_i in x]

def sum_of_squares(x):
    ## step 3 - square the newly formed dataset
    return sum([i**2 for i in x])

def variance(x):
    ## we assume that the list we pass has atleast two elements to find variance.
    n = len(x)
    deviations = de_mean(x)

    ## step 4 - finding out the average of the dataset.
    return sum_of_squares(deviations) / ( n - 1 )

## print(variance(random_numbers))
import math

def standard_deviation(x):
    return math.sqrt(variance(x))

random_numbers = [1,2,4,5,6,7,7]
random_numbers_2 = [1,23,4,5,5,5,6]

## Dot product

def dot(v,w):
    return sum([v_i*w_i for v_i, w_i in zip(v, w)])

## Covariance

def covariance(x ,y):
    return dot(de_mean(x), de_mean(y)) / (len(x) - 1)

#print(covariance(random_numbers, random_numbers_2))

## Correlation

def correlation(x, y):
    std_dev_x = standard_deviation(x)
    std_dev_y = standard_deviation(y)

    if std_dev_x and std_dev_y > 0:
        return covariance(x, y) / std_dev_x / std_dev_y
    else:
        return 0  ## if no variation , correlation is 0.

print(correlation(random_numbers, random_numbers_2))

