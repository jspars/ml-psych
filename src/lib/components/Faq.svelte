<script>
	import { base } from '$app/paths';
</script>

<div class="py-5">
	<h1 class="text-4xl mb-5">Frequently Asked Questions</h1>

	
	<div class="accordion mx-auto max-w-[1000px]" id="accordion">
		
		<!-- How do we get started? -->
		<div class="accordion-item bg-[var(--bg)]">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseOne"
					aria-expanded="false"
					aria-controls="collapseOne"
				>
					How do we get started?
				</button>
			</h2>
			<div
				id="collapseOne"
				class="accordion-collapse collapse"
				data-bs-parent="#accordion"
			>
				<div class="accordion-body">
					<p class="mx-auto prose">
						<strong>Complete the <a href="{base}/contact">contact form</a>.
						</strong> Once received, I will reach out to schedule an initial consultation.
					</p>
					<p class="mx-auto prose">
						The initial consultation is a 20 to 30 minute, virtual, no cost, consultation to get know you,
						what is bringing you to therapy, and to assess whether we are a good fit to work together. I
						will ask you some questions, tell you more about my therapeutic approach, and you will have
						time to ask me questions as well.
					</p>
					<p class="mx-auto prose">
						The working relationship between therapist and client is vital to the success of therapy, and
						therapy is a significant investment of time and resources, so finding a therapist with whom
						you feel a good rapport is important.
					</p>
				</div>
			</div>
		</div>

		<!-- What is an intake? -->
		<div class="accordion-item bg-[var(--bg)]">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFour"
					aria-expanded="false"
					aria-controls="collapseFour"
				>
					What is an intake?
				</button>
			</h2>
			<div
				id="collapseFour"
				class="accordion-collapse collapse"
				data-bs-parent="#accordion"
			>
				<div class="accordion-body">
					<p class="mx-auto prose">
						An intake is <strong>a first session, where I will gather background information</strong> related to your
						reasons for seeking therapy, your developmental history, and other information that helps me
						better understand you and what is bringing you to therapy. Ideally, I prefer 90 minutes for
						the intake, to allow enough time to gather this information.
					</p>
				</div>
			</div>
		</div>
		<!-- How long do sessions last? -->
		<div class="accordion-item bg-[var(--bg)]">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFive"
					aria-expanded="false"
					aria-controls="collapseFive"
				>
					How long do sessions last?
				</button>
			</h2>
			<div
				id="collapseFive"
				class="accordion-collapse collapse"
				data-bs-parent="#accordion"
			>
				<div class="accordion-body">
					<p class="mx-auto prose">
						<strong>Individual sessions typically last between 50 and 55 minutes</strong> and are held weekly. We may meet
						less or more frequently if appropriate. We will discuss frequency of sessions in our first
						session.
					</p>
			
					<p class="mx-auto prose">
						Couples sessions vary in length due to various factors. When possible, <strong>I prefer to see couples
						for at least 75 minutes, once a week</strong>. If schedules do not allow for a 75 minute session, we
						will meet for 50-55 minutes.
					</p>
				</div>
			</div>
		</div>
		<!-- Do you accept insurance? -->
		<div class="accordion-item bg-[var(--bg)]">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFive"
					aria-expanded="false"
					aria-controls="collapseFive"
				>
					Do you accept insurance?
				</button>
			</h2>
			<div
				id="collapseFive"
				class="accordion-collapse collapse"
				data-bs-parent="#accordion"
			>
				<div class="accordion-body">
					<p class="mx-auto prose">
						I currently work with a third party platform to bill insurance. 
						If we agree to work together, and you wish to use insurance, 
						we will discuss this platform and billing during our initial 
						consultation. <strong>I currently can accept Anthem/BCBS 
						and Aetna for Virginia residents only.</strong>
					</p>
				</div>
			</div>
		</div>
		<!-- Can I use insuance for couples or relationship therapy? -->
		<div class="accordion-item bg-[var(--bg)]">
			<h2 class="accordion-header">
				<button
					class="accordion-button collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapseFive"
					aria-expanded="false"
					aria-controls="collapseFive"
				>
					Can I use insurance for couples or relationship therapy?
				</button>
			</h2>
			<div
				id="collapseFive"
				class="accordion-collapse collapse"
				data-bs-parent="#accordion"
			>
				<div class="accordion-body">
					<p class="mx-auto prose">
						Unfortunately,<strong>probably not</strong>.  Many health 
						insurance policies do not cover relationship, couples, 
						or marital therapy, as couples therapy is not specifically 
						focused on treating a mental health disorder. Couples
						therapy is focused on helping individuals improve their 
						romantic relationships. This is not considered a medically 
						necessary service by most health insurance policies.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.collapse {
		visibility: visible;
	}

</style>
