using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.Entity;
using StudentApplication.Models;

namespace StudentApplication.Controllers
{
    public class DepartmentController : Controller
    {
        // GET: Department
        private ApplicationDbContext db;
        public DepartmentController()
        {
            db = new ApplicationDbContext();
        }

        public ActionResult Index()
        {
            var dept = db.Departments.ToList();
            return View(dept);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Department dept)
        {
            if (!ModelState.IsValid)
            {
                var department = new Department
                {
                    DepartmentName=dept.DepartmentName,
                    Location=dept.Location
                };
                return View("Create", department);
            }

            db.Departments.Add(dept);
            db.SaveChanges();
            var changedDB = db.Departments.ToList();
            return RedirectToAction("Index");
        }

        public ActionResult Edit(int ID)
        {
            var deptFromDB = db.Departments.Where(x => x.DepartmentID == ID).FirstOrDefault();
            var department = new Department
            {
                DepartmentID=deptFromDB.DepartmentID,
                DepartmentName = deptFromDB.DepartmentName,
                Location = deptFromDB.Location
            };
            return View(department);
        }

        [HttpPost]
        public ActionResult Edit(Department dept)
        {  
            var deptFromDB  = db.Departments.FirstOrDefault(x => x.DepartmentID == dept.DepartmentID); ;
            deptFromDB.DepartmentName = dept.DepartmentName;
            deptFromDB.Location = dept.Location;

            db.Entry(deptFromDB).State = EntityState.Modified;
            db.SaveChanges();

            return RedirectToAction("Index");
        }

        public ActionResult Delete(int ID)
        {
            var deptFromDB = db.Departments.Where(x => x.DepartmentID == ID).FirstOrDefault();
            var dept = new Department
            {
                DepartmentID = deptFromDB.DepartmentID,
                DepartmentName = deptFromDB.DepartmentName,
                Location = deptFromDB.Location
            };
            return View(dept);
        }

        [HttpPost, ActionName("Delete")]
        public ActionResult DeleteConfirmed(int ID)
        {
            Department dept = db.Departments.Find(ID);
            
            db.Departments.Remove(dept);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Details(int ID)
        {
            var deptFromDB = db.Departments.Where(d => d.DepartmentID == ID).FirstOrDefault();
            return View(deptFromDB);
        }

    }


}