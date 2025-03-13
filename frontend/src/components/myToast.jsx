
import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function MyToast({title,desc}) {
    return (
        <Button
            type="submit"
            className="cursor-pointer bottom-4 right-4 mt-10"
            onClick={() =>
                toast(title, {
                    description:desc,
                    action: {
                        label: "close",
                        onClick: () => console.log("Undo"),
                    },
                })
            }
        >
            Show Toast
        </Button>
    )
}

