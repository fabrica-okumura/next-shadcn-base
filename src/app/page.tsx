import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { SectionContainer } from "@/components/ui/section-container"
import { Gap } from "@/components/shared/gap"

export default function Home() {
  return (
    <main className="min-h-screen space-y-6 bg-(--usage-background) p-6">
      <SectionContainer className="space-y-4">
        <Heading variant="h3">Accordion</Heading>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>セクション 1</AccordionTrigger>
            <AccordionContent>
              これはアコーディオンのデモです。開閉動作を確認してください。
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>セクション 2</AccordionTrigger>
            <AccordionContent>
              他のセクションも同様に動作します。
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SectionContainer>

      <SectionContainer className="space-y-4">
        <Heading variant="h3">Alert Dialog</Heading>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">削除ダイアログを開く</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>本当に削除しますか？</AlertDialogTitle>
              <AlertDialogDescription>
                この操作は取り消せません。対象のデータが完全に削除されます。
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>キャンセル</AlertDialogCancel>
              <AlertDialogAction>削除する</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SectionContainer>

      <SectionContainer className="space-y-4">
        <Heading variant="h3">Aspect Ratio</Heading>
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center rounded-md border border-dashed border-(--usage-border) bg-(--usage-preview-bg)"
        >
          <span className="text-sm text-muted-foreground">
            16:9 の枠に収まるコンテンツ
          </span>
        </AspectRatio>
      </SectionContainer>

      <SectionContainer className="space-y-4">
        <Heading variant="h3">Badge</Heading>
        <Gap row wrap gap="sm">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </Gap>
      </SectionContainer>

      <SectionContainer className="space-y-4">
        <Heading variant="h3">Breadcrumb</Heading>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ホーム</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ダッシュボード</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>設定</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </SectionContainer>

      <SectionContainer className="space-y-4">
        <Heading variant="h3">Button</Heading>
        <Gap row wrap gap="sm">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="link">Link</Button>
        </Gap>
      </SectionContainer>
    </main>
  )
}
