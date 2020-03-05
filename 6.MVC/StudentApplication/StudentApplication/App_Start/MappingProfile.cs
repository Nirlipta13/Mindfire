using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.Web;
using StudentApplication.Models;
using StudentApplication.Dtos;


namespace StudentApplication.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            Mapper.CreateMap<Student, StudentDto>();
            Mapper.CreateMap<StudentDto,Student>();

        }
    }
}