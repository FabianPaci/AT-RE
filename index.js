function RandomEpisode(season,special,distant) {
  // i could make a fetch request but for now ill just hard code it
	const episodes=["https://www.adventure-time.best/2020/04/adventure-time-s1-ep-1-slumber-party.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-1-slumber-party.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-2-trouble-in-lumpy.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-3-prisoners-of-love.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-4-tree-trunks.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-5-enchiridion.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-6-jiggler.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-7-ricardio-heart.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-8-business-time.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-9-my-two-favorite.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-10-memories-of.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-11-wizard.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-12-evicted.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-13-city-of-thieves.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-14-witchs-garden.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-15-what-is-life.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-16-ocean-of-fear.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-17-when-wedding.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-18-dungeon.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-19-duke.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-20-freak-city.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-21-donny.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-22-henchman.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-23-rainy-day.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-24-what-have-you.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-25-his-hero.html","https://www.adventure-time.best/2020/04/adventure-time-s1-ep-26-gut-grinder.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-1-it-came-from.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-2-eyes.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-3-loyalty-to-king.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-4-blood-under-skin.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-5-storytelling.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-6-slow-love.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-7-power-animal.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-8-crystals-have.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-9-other-tarts.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-10-to-cut-womans.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-11-chamber-of.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-12-her-parents.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-13-pods.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-14-silent-king.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-15-real-you.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-16-guardians-of.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-17-death-in-bloom.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-18-susan-strong.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-19-mystery-train.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-20-go-with-me.html","https://www.adventure-time.best/2020/04/adventure-time-s2-e-21-belly-of-east.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-22-limit.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-23-video-makers.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-24-heat-signature.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-25-mortal-folly.html","https://www.adventure-time.best/2020/04/adventure-time-s2-ep-26-mortal-recoil.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-1-conquest-of.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-2-morituri-te.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-3-memory-of-memory.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-4-hitman.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-5-too-young.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-6-monster.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-7-still.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-8-wizard-battle.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-9-fionna-and-cake.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-10-what-was-missing.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-11-apple-thief.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-12-creeps.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-13-from-bad-to.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-14-beautopia.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-15-no-one-can-hear.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-16-jake-vs-me-mow.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-17-thank-you.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-18-new-frontier.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-19-holly-jolly.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-20-holly-jolly.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-21-marcelines.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-22-paper-pete.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-23-another-way.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-24-ghost-princess.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-25-dads-dungeon.html","https://www.adventure-time.best/2020/04/adventure-time-s3-ep-26-incendium.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-1-hot-to-touch.htmhttps://www.adventure-time.best/2020/04/adventure-time-s4-ep-2-five-short.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-3-web-weirdos.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-4-dream-of-love.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-5-return-to.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-6-daddys-little.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-7-in-your-footsteps.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-8-hug-wolf.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-9-princess-monster.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-10-goliad.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-11-beyond-this.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-12-gotcha.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-13-princess-cookie.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-14-card-wars.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-15-sons-of-mars.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-16-burning-low.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-17-bmo-noire.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-18-king-worm.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-19-lady-peebles.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-20-you-made-me.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-21-who-would-win.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-22-ignition-point.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-23-hard-easy.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-24-reign-of-gunters.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-25-i-remember-you.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-26-lich.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-1-finn-human.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-2-jake-dog.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-3-five-more-short.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-4-up-tree.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-5-all-little-people.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-6-jake-dad.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-7-davey.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-8-mystery-dungeon.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-9-all-your-fault.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-10-little-dude.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-11-bad-little-boy.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-12-vault-of-bones.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-13-great-bird-man.html","https://www.adventure-time.best/2020/04/adventure-time-s4-ep-14-simon-marcy.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-15-glitch-is-glitch.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-16-puhoy.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-17-bmo-lost.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-18-princess-potluck.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-19-james-baxter.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-20-shh.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-21-suitor.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-22-partys-over.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-23-one-last-job.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-24-another-five.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-25-candy-streets.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-26-wizards-only.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-27-jake-suit.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-28-be-more.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-29-sky-witch.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-30-frost-fire.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-x-guardians-of.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-32-earth-water.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-33-time-sandwich.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-34-vault.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-35-love-games.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-36-dungeon-train.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-37-box-prince.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-38-red-starved.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-39-we-fixed-truck.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-40-play-date.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-41-pit.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-42-james.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-43-root-beer-guy.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-44-apple-wedding.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-45-blade-of-grass.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-46-rattleballs.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-47-red-throne.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-48-betty.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-49-bad-timing.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-50-lemonhope-part-1.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-51-lemonhope-part-2.html","https://www.adventure-time.best/2020/04/adventure-time-s5-ep-52-billys-bucket.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-1-wake-up.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-2-escape-from.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-3-james-ii.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-4-tower.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-5-sad-face.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-6-breezy.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-7-food-chain.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-8-furniture-meat.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-9-prince-who.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-10-something-big.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-11-little-brother.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-12-ocarina.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-13-thanks-for.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-14-princess-day.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-15-nemesis.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-16-joshua-and.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-17-ghost-fly.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-18-everythings-jake.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-19-is-that-you.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-20-jake-brick.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-21-dentist.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-22-cooler.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-23-pajama-war.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-24-evergreen.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-25-astral-plane.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-26-gold-stars.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-27-visitor.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-28-mountain.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-29-dark-purple.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-30-diary.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-31-walnuts-rain.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-32-friends-forever.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-33-jermaine.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-34-chips-and-ice.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-35-graybles-1000.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-36-hoots.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-x-water-park-prank.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-38-you-forgot-your.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-39-be-sweet.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-40-orgalorg.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-41-on-lam.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-42-hot-diggity-doom.html","https://www.adventure-time.best/2020/04/adventure-time-s6-ep-43-comet.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-1-bonnie-and-neddy.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-2-varmints.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-3-cherry-cream-soda.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-4-mama-said.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-5-football.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-6-marceline.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-7-everything-stays.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-8-vamps-about.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-9-empress-eyes.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-10-may-i-come-in.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-11-take-her-back.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-12-checkmate.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-13-dark-cloud.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-1516-more-you-moe.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-16-summer-showers.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-17-angel-face.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-18-president.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-19-blank-eyed-girl.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-20-bad-jubies.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-21-kings-ransom.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-22-scamps.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-23-crossover.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-24-hall-of-egress.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-25-flute-spell.html","https://www.adventure-time.best/2020/04/adventure-time-s7-ep-26-thin-yellow-line.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-1-broke-his-crown.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-2-dont-look.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-3-beyond-grotto.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-4-lady-rainicorn.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-5-i-am-sword.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-6-bun-bun.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-7-normal-man.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-8-elemental.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-9-five-short-tables.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-10-music-hole.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-11-daddy-daughter.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-12-preboot.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-13-reboot.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-14-two-swords.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-15-do-no-harm.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-16-wheels.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-17-high-strangeness.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-18-horse-and-ball.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-19-jelly-beans.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-20-invitation.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-21-whipple-happy.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-22-mysterious.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-23-imaginary.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-24-hide-and-seek.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-25-min-and-marty.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-26-helpers.html","https://www.adventure-time.best/2020/04/adventure-time-s8-ep-27-light-cloud.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-1-orb.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-2-skyhooks.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-3-bespoken-for.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-4-winter-light.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-5-cloudy.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-6-slime-central.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-7-happy-warrior.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-8-hero-heart.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-9-skyhooks-ii.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-10-abstract.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-11-ketchup.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-12-fionna-and-cake.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-1-whispers.html","https://www.adventure-time.best/2020/04/adventure-time-s9-ep-14-three-buckets.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-1-wild-hunt.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-1-always-bmo.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-3-son-of-rap-bear.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-4-bonnibel.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-5-seventeen.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-6-ring-of-fire.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-7-marcy-hunson.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-8-first.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-9-blenanas.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-10-jake-starchild.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-11-temple-of-mars.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-12-gumbaldia.html","https://www.adventure-time.best/2020/04/adventure-time-s10-ep-13-come-along.html"];
  const specialEpisodes=["https://www.adventure-time.best/2020/04/adventure-time-special-e01-wand.html","https://www.adventure-time.best/2020/04/adventure-time-special-e02-alls-well.html","https://www.adventure-time.best/2020/04/adventure-time-special-e03-have-you.html","https://www.adventure-time.best/2020/04/adventure-time-special-e04-sow-do-you.html","https://www.adventure-time.best/2020/04/adventure-time-special-e05-gift-that.html","https://www.adventure-time.best/2020/04/adventure-time-special-e06-frog-seasons.html","https://www.adventure-time.best/2020/04/adventure-time-special-e07-frog-seasons.html","https://www.adventure-time.best/2020/04/adventure-time-special-e08-frog-seasons.html","https://www.adventure-time.best/2020/04/adventure-time-special-e09-frog-seasons.html","https://www.adventure-time.best/2020/04/adventure-time-special-e10-frog-seasons.html","https://www.adventure-time.best/2020/04/adventure-time-special-episode-diamond.html"];
  const distantEpisodes=["https://www.adventure-time.best/2020/06/adventure-time-distant-lands-part-1.html","https://www.adventure-time.best/2020/11/adventure-time-distant-lands-part-2.html","https://www.adventure-time.best/2021/05/adventure-time-distant-lands-part-3.html"];
  let range=[];
  let picker;
  switch(season) {
    case 1:
      range=[0,25];
      break;
    case 2:
      range=[26,51];
      break;
    case 3:
      range=[52,77];
      break
    case 4:
      range=[78,103];
      break
    case 5:
      range=[104,155];
      break;
    case 6:
      range=[156,198];
      break;
    case 7:
      range=[199,224];
      break;
    case 8:
      range=[225,251];
      break;
    case 9:
      range=[252,265];
      break;
    case 10:
      range=[266,278];
      break;
    default:
      range=[0,278];
      break;
  }
  if(season>0&&season<11&&distant==1&&special==1)
    picker = Math.floor(Math.random() * (3 - 1) + 1);
  else if(season>0&&season<11&&distant==1)
    picker = Math.floor(Math.random() * (2 - 1) + 1);
  else if(season>0&&season<11&&special==1)
    picker = Math.floor(Math.random() * (3 - 2) + 2);
  else if(season<1|season>10&&special==1)
    picker = 3;
  else if(season<1|season>10&&distant==1)
    picker=2;
  else if(season<1|season>10&&distant==1&&special==1)
    picker = Math.floor(Math.random() * (2 - 1) + 1);
  if(picker==1)
    window.location.href=episodes[Math.floor(Math.random() * (range[1] - range[0]) + range[0])];
  else if(picker==2)
    window.location.href=distantEpisodes[Math.floor(Math.random() * (2 - 0) + 0)];
  else if(picker==3)
    window.location.href=specialEpisodes[Math.floor(Math.random() * (10 - 0) + 0)];
  else
    window.location.href=episodes[Math.floor(Math.random() * (range[1] - range[0]) + range[0])];
}

function data() {
  var temp=prompt("Enter a season (enter a number 1-10 if you want a season or anything else if you dont)","0");
  var temp1=prompt("enter '1' to include special episodes and anything else if you dont", "0");
  var temp2=prompt("enter '1' to include distant lands episodes and anything else if you dont","0");
  var seasonConfirm=parseInt(temp);
  var specialConfirm=parseInt(temp1);
  var distantConfirm=parseInt(temp2);
  RandomEpisode(seasonConfirm,specialConfirm,distantConfirm);
}

if(window.location.href.search("adventure-time.best/seasons")) {
  node = document.getElementById('comments');
  node.insertAdjacentHTML('beforeend', '<button type="button" style="background-color: lightblue;" onclick="data();">Random Episode (addon)</button>');
} else if(window.location.href.search("adventure-time.best/adventure-time-s")) {
  node = document.getElementById('Blog1');
  node.insertAdjacentHTML('beforebegin', '<button type="button" style="background-color: lightblue;" onclick="data();">Random Episode (addon)</button>');
}
