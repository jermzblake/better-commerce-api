import Router from "koa-router"
import { createMember, gethMemberById, updateMember } from "../../controller/member/member.controller"

const router = new Router({
  prefix: "/member"
})

router.post("/", createMember)
router.get("/:memberId", gethMemberById)
router.put("/:memberId", updateMember)

export default router