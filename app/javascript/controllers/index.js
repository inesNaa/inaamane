// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import SkillsController from "./skills_controller"
application.register("skills", SkillsController)

import TypingEffectController from "./typing_effect_controller"
application.register("typing-effect", TypingEffectController)
