import {
  ActionBarPrimitive,
  BranchPickerPrimitive,
  ComposerPrimitive,
  MessagePrimitive,
  ThreadPrimitive,
} from '@assistant-ui/react';
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CopyIcon,
  PencilIcon,
  RefreshCwIcon,
  SendHorizontalIcon,
} from 'lucide-react';
import type { FC } from 'react';

import { MarkdownText } from '@/components/assistant-ui/MarkdownText';
import { TooltipIconButton } from '@/components/assistant-ui/TooltipIconButton';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export const Thread: FC = () => {
  return (
    <ThreadPrimitive.Root
      className='box-border flex h-full flex-col overflow-hidden bg-transparent'
      style={{
        ['--thread-max-width' as string]: '42rem',
      }}
    >
      <ThreadPrimitive.Viewport className='custom-scrollbar flex h-full flex-col items-center overflow-y-scroll scroll-smooth bg-inherit px-4 pt-8'>
        <ThreadWelcome />

        <ThreadPrimitive.Messages
          components={{
            UserMessage: UserMessage,
            EditComposer: EditComposer,
            AssistantMessage: AssistantMessage,
          }}
        />

        <ThreadPrimitive.If empty={false}>
          <div className='min-h-8 flex-grow' />
        </ThreadPrimitive.If>

        <div className='sticky bottom-0 mt-3 flex w-full max-w-[var(--thread-max-width)] flex-col items-center justify-end rounded-t-lg bg-inherit pb-4'>
          <ThreadScrollToBottom />
          <Composer />
        </div>
      </ThreadPrimitive.Viewport>
    </ThreadPrimitive.Root>
  );
};

const ThreadScrollToBottom: FC = () => {
  return (
    <ThreadPrimitive.ScrollToBottom asChild>
      <Button
        variant='outline'
        size='icon'
        className='text-accent hover:text-accent/90 hover:border-accent/50 absolute -top-12 rounded-full border border-[#38234d] hover:bg-[#220041] disabled:invisible'
      >
        <ArrowDownIcon className='h-4 w-4' />
      </Button>
    </ThreadPrimitive.ScrollToBottom>
  );
};

const ThreadWelcome: FC = () => {
  return (
    <ThreadPrimitive.Empty>
      <div className='flex w-full max-w-[var(--thread-max-width)] flex-grow flex-col'>
        <div className='flex w-full flex-grow flex-col items-center justify-center'>
          <p className='text-accent font-merriweather mt-4 text-center font-medium'>
            <span className='block md:hidden'>
              Welcome to Neverland. <br />
              How can I assist you?
            </span>
            <span className='hidden md:block lg:hidden'>
              Welcome to Neverland! <br />
              Need help?
            </span>
            <span className='hidden lg:block'>
              Welcome to Neverland, I&apos;m Nadette! <br />
              How can I help you today?
            </span>
          </p>
        </div>
        <ThreadWelcomeSuggestions />
      </div>
    </ThreadPrimitive.Empty>
  );
};

const ThreadWelcomeSuggestions: FC = () => {
  return (
    <div className='mt-3 flex w-full items-stretch justify-center gap-4'>
      <ThreadPrimitive.Suggestion
        className='flex max-w-sm grow basis-0 cursor-pointer flex-col items-center justify-center rounded-lg border border-[#38234d] p-3 transition-colors ease-in hover:border-[#623f85]'
        prompt='What is Neverland?'
        method='replace'
        autoSend
      >
        <span className='line-clamp-2 text-xs font-semibold text-ellipsis'>
          What is Neverland?
        </span>
      </ThreadPrimitive.Suggestion>
      <ThreadPrimitive.Suggestion
        className='flex max-w-sm grow basis-0 cursor-pointer flex-col items-center justify-center rounded-lg border border-[#38234d] p-3 transition-colors ease-in hover:border-[#623f85]'
        prompt='How do self-repaying loans work?'
        method='replace'
        autoSend
      >
        <span className='line-clamp-2 text-xs font-semibold text-ellipsis'>
          How do self-repaying loans work?
        </span>
      </ThreadPrimitive.Suggestion>
    </div>
  );
};

const Composer: FC = () => {
  return (
    <ComposerPrimitive.Root className='flex w-full flex-wrap items-end rounded-lg border border-[#38234d] bg-black/93 px-2.5 shadow-sm transition-colors ease-in focus-within:border-[#623f85]'>
      <ComposerPrimitive.Input
        rows={1}
        placeholder='Ask about Neverland...'
        className='placeholder:text-accent/50 max-h-40 flex-grow resize-none border-none bg-transparent px-2 py-4 text-base text-white/90 outline-none focus:ring-0 disabled:cursor-not-allowed'
      />
      <ComposerAction />
    </ComposerPrimitive.Root>
  );
};

const ComposerAction: FC = () => {
  return (
    <>
      <ThreadPrimitive.If running={false}>
        <ComposerPrimitive.Send asChild>
          <TooltipIconButton
            tooltip='Send'
            variant='default'
            className='my-2.5 size-8 border border-[#38234d] bg-[#38234d]/20 p-2 text-[#cfbcff] transition-opacity ease-in hover:bg-[#38234d]/30'
          >
            <SendHorizontalIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Send>
      </ThreadPrimitive.If>
      <ThreadPrimitive.If running>
        <ComposerPrimitive.Cancel asChild>
          <TooltipIconButton
            tooltip='Cancel'
            variant='default'
            className='my-2.5 size-8 p-2 transition-opacity ease-in'
          >
            <CircleStopIcon />
          </TooltipIconButton>
        </ComposerPrimitive.Cancel>
      </ThreadPrimitive.If>
    </>
  );
};

const UserMessage: FC = () => {
  return (
    <MessagePrimitive.Root className='grid w-full max-w-[var(--thread-max-width)] auto-rows-auto grid-cols-[minmax(72px,1fr)_auto] gap-y-2 py-4 [&:where(>*)]:col-start-2'>
      <UserActionBar />

      <div className='col-start-2 row-start-2 max-w-[calc(var(--thread-max-width)*0.8)] rounded-3xl bg-[#d132e0]/20 px-5 py-2.5 break-words text-white/90 backdrop-blur-sm'>
        <MessagePrimitive.Content />
      </div>

      <BranchPicker className='col-span-full col-start-1 row-start-3 -mr-1 justify-end' />
    </MessagePrimitive.Root>
  );
};

const UserActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide='not-last'
      className='col-start-1 row-start-2 mt-2.5 mr-3 flex flex-col items-end'
    >
      <ActionBarPrimitive.Edit asChild>
        <TooltipIconButton tooltip='Edit'>
          <PencilIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Edit>
    </ActionBarPrimitive.Root>
  );
};

const EditComposer: FC = () => {
  return (
    <ComposerPrimitive.Root className='bg-muted my-4 flex w-full max-w-[var(--thread-max-width)] flex-col gap-2 rounded-xl'>
      <ComposerPrimitive.Input className='text-foreground flex h-8 w-full resize-none rounded-xl bg-[#d132e0]/20 p-4 outline-none' />

      <div className='mx-3 mb-3 flex items-center justify-center gap-2 self-end'>
        <ComposerPrimitive.Cancel asChild>
          <Button variant='ghost'>Cancel</Button>
        </ComposerPrimitive.Cancel>
        <ComposerPrimitive.Send asChild>
          <Button>Send</Button>
        </ComposerPrimitive.Send>
      </div>
    </ComposerPrimitive.Root>
  );
};

const AssistantMessage: FC = () => {
  return (
    <MessagePrimitive.Root className='relative grid w-full max-w-[var(--thread-max-width)] grid-cols-[auto_auto_1fr] grid-rows-[auto_1fr] py-4'>
      <div className='col-span-2 col-start-2 row-start-1 my-1.5 max-w-[calc(var(--thread-max-width)*0.8)] rounded-3xl border border-none px-5 py-2.5 leading-7 break-words text-white/90'>
        <MessagePrimitive.Content components={{ Text: MarkdownText }} />
      </div>

      <AssistantActionBar />

      <BranchPicker className='col-start-2 row-start-2 mr-2 ml-2.5' />
    </MessagePrimitive.Root>
  );
};

const AssistantActionBar: FC = () => {
  return (
    <ActionBarPrimitive.Root
      hideWhenRunning
      autohide='not-last'
      autohideFloat='single-branch'
      className='text-muted-foreground data-[floating]:bg-background col-start-3 row-start-2 ml-4 flex gap-1 data-[floating]:absolute data-[floating]:rounded-md data-[floating]:border data-[floating]:p-1 data-[floating]:shadow-sm'
    >
      <ActionBarPrimitive.Copy asChild>
        <TooltipIconButton tooltip='Copy'>
          <MessagePrimitive.If copied>
            <CheckIcon />
          </MessagePrimitive.If>
          <MessagePrimitive.If copied={false}>
            <CopyIcon />
          </MessagePrimitive.If>
        </TooltipIconButton>
      </ActionBarPrimitive.Copy>
      <ActionBarPrimitive.Reload asChild>
        <TooltipIconButton tooltip='Refresh'>
          <RefreshCwIcon />
        </TooltipIconButton>
      </ActionBarPrimitive.Reload>
    </ActionBarPrimitive.Root>
  );
};

const BranchPicker: FC<BranchPickerPrimitive.Root.Props> = ({
  className,
  ...rest
}) => {
  return (
    <BranchPickerPrimitive.Root
      hideWhenSingleBranch
      className={cn(
        'text-muted-foreground inline-flex items-center text-xs',
        className,
      )}
      {...rest}
    >
      <BranchPickerPrimitive.Previous asChild>
        <TooltipIconButton tooltip='Previous'>
          <ChevronLeftIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Previous>
      <span className='font-medium'>
        <BranchPickerPrimitive.Number /> / <BranchPickerPrimitive.Count />
      </span>
      <BranchPickerPrimitive.Next asChild>
        <TooltipIconButton tooltip='Next'>
          <ChevronRightIcon />
        </TooltipIconButton>
      </BranchPickerPrimitive.Next>
    </BranchPickerPrimitive.Root>
  );
};

const CircleStopIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
      fill='currentColor'
      width='16'
      height='16'
    >
      <rect width='10' height='10' x='3' y='3' rx='2' />
    </svg>
  );
};
