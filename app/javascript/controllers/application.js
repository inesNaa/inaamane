import { Application } from "@hotwired/stimulus"
import TypingEffectController from "../controllers/typing_effect_controller";


const application = Application.start()
application.register("typing-effect", TypingEffectController);


// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
