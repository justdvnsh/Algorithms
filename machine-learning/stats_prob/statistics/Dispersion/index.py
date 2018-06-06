def mean(x):
   return sum(x)/len(x)

def quantile(x, p):
    p_index = int(p * len(x))
    return sorted(x)[p_index]

random_numbers = [1,2,3,4,5,6,7,8,9]

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

 #print(standard_deviation(random_numbers))

def interquartile_range(x):
    return quantile(x, 0.75) - quantile(x, 0.25)

print(interquartile_range(random_numbers))