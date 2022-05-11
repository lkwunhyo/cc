# Cloudcase Coding Challenge

The Cloudcase coding challenge was developed using HTML, CSS, and JavaScript, without the use of any JavaScript framework. It contains the design for the new staff onboarding form. Given the specifications, it was understood that a new form was required to onboard new staff members, as well as to log and calculate their annual salary, tax and superannuation contributions.

From these requirements, the staff onboarding form simply consists of the following fields: First Name, Last Name, Phone Number, Email, Annual Salary, and the Super Contribution.

Given the short-term nature of the task, responsive design was not prioritized (though implemented). For the same reasons and the lack of specification, the Submit button functionality and Login page were not implemented also.

## File Structure

The codebase consists of the file structure:

- assets
  - cc_logo.png
- index.html
- styles.css
- script.js
- readme.md

## Design Choices

The onboarding process is a register form, so the page has been designed like so.
The negative space provided by the card allows the user to focus on the contents of the card alone.
The blue aside on the left side of the card draws the user's attention first, drawing their eyes to the logo and to the description of the page function ("creating your profile").
Then the user sees the contents of the form. The description below the header describes in further detail what the page is for.
The action button is styled to draw the most attention in this side of the card. Right below is a link to the Login page, which draws much lesser attention.

## Annual Tax and Superannuation Calculations

The annual tax and superannuation is calculated in the JavaScript (script.js). It follows the Module Pattern and contains both functionalities for calculating taxes and testing.
There are two functions for calculating tax details:

1.  calculateTax(salary)
2.  calculateSuper(salary, rate)

Both functions take a salary argument (in cents), and takes a decimal rate.

Calculating the annual tax uses a simple conditional if/else if/else statement. Due to the scale and short-term nature of this application, the base values for determining the tax are hardcoded into the solution.

## Testing

As no testing frameworks were used, testing was solely achieved through JavaScript. There are successful and unsuccessful cases.
