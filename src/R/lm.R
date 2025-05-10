#!/usr/bin/env Rscript
# Load the jsonlite package for JSON parsing and conversion.
library(jsonlite)

# Get command line arguments (excluding R’s default ones)
args <- commandArgs(trailingOnly = TRUE)

if (length(args) < 1) {
  stop("No input JSON provided.")
}

# Parse the JSON input
inputData <- fromJSON(args[1])

# Extract x and y data (make sure they are numeric vectors)
x <- as.numeric(inputData$x)
y <- as.numeric(inputData$y)

# Fit a linear model: y = a*x + b
model <- lm(y ~ x)

# Get the model summary
model_summary <- summary(model)
coef_matrix <- model_summary$coefficients

# Extract intercept (b) and slope (a)
intercept <- coef_matrix["(Intercept)", "Estimate"]
slope <- coef_matrix["x", "Estimate"]

# Extract the p-value for the slope
pvalue <- coef_matrix["x", "Pr(>|t|)"]

# Create a list with the output
output <- list(intercept = intercept, slope = slope, pvalue = pvalue)

# Print the output as JSON
cat(toJSON(output, auto_unbox = TRUE))