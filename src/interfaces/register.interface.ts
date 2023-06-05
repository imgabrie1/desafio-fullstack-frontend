import { z } from "zod"
import registerSchema from "../schemas/register.schema"


type iRegister = z.infer<typeof registerSchema>

export default iRegister