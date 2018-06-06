random_numbers = [1,2,3,4,45,5,6,7,7,8,9,0,12,1000]

## Mean (Average) - Sum of the data points divided by the number of data points.

def mean(x):
    return sum(x)/len(x) ## sum and len are in-built python functions

#print(mean(random_numbers))

## Median 

def median(x):
    #1 . We need to sort the data , because , median is defined on sorted data.
    sorted_x = sorted(x) ##pre-built python function
    midpoint = len(x) // 2

    ## the "" // "" operator returns floor value for the division . Example 
    ## 3/2 returns 1.5 whereas 3//2 returns 1 (the floor value for division)
    ## this is done , because we only want integers and not floats.

    if len(x) % 2 == 1:
        return sorted_x[midpoint] ## i.e. if x is odd, return , mid-value.

    else:
        low = midpoint - 1
        high = midpoint

        return (sorted_x[low] + sorted_x[high]) / 2 ## / is used , because we want exact data.

## print(median(random_numbers))

## Quantile

def quantile(x, p):
    p_index = int(p * len(x))
    return sorted(x)[p_index]

    ### this function returns the pth-percentile value in x.

print(quantile(random_numbers, 0.75))

## Mode

from collections import Counter

def mode(x):
    counts = Counter(x)
    max_count = max(counts.values())
    return [x_i	for	x_i, count in counts.iteritems() if	count == max_count]

# print(mode(random_numbers))