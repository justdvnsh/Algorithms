from statistics import mean
import numpy as np
import pandas as pd

data = pd.read_csv('Salary_data.csv')

def best_fit_slope_and_intercept(x ,y):
    m = (((mean(x)*mean(y)) - mean(x*y)) /
         ((mean(x)*mean(x)) - mean(x*x)))
    
    c = mean(y) - m*mean(x)
    
    return m, c

def squared_error(y_orig, y_line):
    return sum((y_line - y_orig) * (y_line - y_orig))

def coefficient_of_determination(y_orig, y_line):
    y_mean_line = [mean(y_orig) for y in y_orig]
    squared_error_regr = squared_error(y_orig, y_line)
    squared_error_y_mean = squared_error(y_orig, y_mean_line)
    return 1 - (squared_error_regr/squared_error_y_mean)

m, c = best_fit_slope_and_intercept(data['YearsExperience'], data['Salary'])

regression_line = [(m*x)+c for x in data['YearsExperience']]

predict_x = data['Salary']
predict_y = [((m*x) + c) for x in predict_x]

r_squared = coefficient_of_determination(data['Salary'] ,regression_line)
print(r_squared)


## For Visualization

# import matplotlib.pyplot as plt
# from matplotlib import style

# style.use('ggplot')

# plt.scatter(data['YearsExperience'], data['Salary'],color='blue')
# plt.plot(data['YearsExperience'], regression_line, label='regression_line')
# plt.title('Salary vs Experience')
# plt.legend()
# plt.show()