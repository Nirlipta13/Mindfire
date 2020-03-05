using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using StudentApplication.Dtos;
using StudentApplication.Models;
using AutoMapper;

namespace StudentApplication.Controllers.Api
{
    public class StudentsController : ApiController
    {
        private ApplicationDbContext db;
        public StudentsController()
        {
            db = new ApplicationDbContext();
        }

        //GET /api/students
        public IEnumerable<StudentDto> GetAllStudents()
        {
            return db.Students.ToList().Select(Mapper.Map<Student,StudentDto>);
        }


        //GET /api/students/1
        public StudentDto GetStudents(int ID)
        {
            var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
            if(std==null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return Mapper.Map<Student,StudentDto>(std);
        }

        //POST /api/students
        [HttpPost]
        public IHttpActionResult Create(StudentDto studentDto)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            var student=Mapper.Map<StudentDto, Student>(studentDto);
            db.Students.Add(student);
            db.SaveChanges();
            studentDto.StudentID = student.StudentID;
            return Created(new Uri(Request.RequestUri +"/"+ student.StudentID),studentDto);
        }

        [HttpPut]
        public void Edit(int ID,StudentDto studentDto)
        {
            if (!ModelState.IsValid)
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var stdFromDB = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
            if(stdFromDB==null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            Mapper.Map(studentDto,stdFromDB);
            db.SaveChanges();
        }


        [HttpDelete]
        public void Delete(int ID)
        {
            var stdFromDB = db.Students.Where(s => s.StudentID==ID).FirstOrDefault();
            if(stdFromDB==null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            db.Students.Remove(stdFromDB);
            db.SaveChanges();
        }
    }
}
