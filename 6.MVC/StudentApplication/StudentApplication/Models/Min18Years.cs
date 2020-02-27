using System;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace StudentApplication.Models
{
    public class Min18Years: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
 	         var student=(Student) validationContext.ObjectInstance;
             return student.StudentAge >= 18 ? ValidationResult.Success : new ValidationResult("Age must be greater than 18 Years");
           
        }
    }
}