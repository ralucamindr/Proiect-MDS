﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Incercare.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "HELLO.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult Game() //Asta e pt HANGMAN 
        {
            return View();

        }
        public ActionResult Easy()//EASY PT HANGMAN . LA FEL SI MEDIUM SI HARD 
        {
            return View();
        }

        public ActionResult Medium()
        {
            return View();
        }

        public ActionResult Hard()
        {
            return View();
        }

        public ActionResult SpaceInvaders()
        {
            return View();
        }

        public ActionResult SpaceEasy()
        {
            return View();
        }
        public ActionResult SpaceMedium()
        {
            return View();
        }
        public ActionResult SpaceHard()
        {
            return View();
        }


        public ActionResult MemoryGame()
        {
            return View();
        }


        public ActionResult Bears()
        {
            return View();
        }




    }
}