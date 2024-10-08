import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/shadcn/ui/card";

export default function TeamCard({}) {
    return (
        <>
            <div className={"group [perspective:1000px]"}>
                <div className={"relative transform-cpu [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]"} >
                    <div className={"absolute inset-0"}>
                        <Card className={"w-64 min-h-[400px] mx-auto"}>
                            <CardHeader>
                                <CardTitle>Title</CardTitle>
                                <CardDescription>Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>Test</div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className={"absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]"}>
                        <Card className={"w-64 min-h-[400px] mx-auto"}>
                            <CardHeader>
                                <CardTitle>Back Title</CardTitle>
                                <CardDescription>Back Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div>Content</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}